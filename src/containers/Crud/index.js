import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/crud/actions';
import Input  from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import Popconfirms from '../../components/feedback/popconfirm';
import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ButtonHolders,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
} from './articles.style';

class Crud extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      dataRow: null,
    }
  }
  componentDidMount() {
    this.props.getPostsSaga();
  }
  handleRecord = (actionName, article) => {
    if (article.key && actionName !== 'delete') actionName = 'update';
    this.props.deletePostSaga(article.id);
  };

  handleModal(article) {
    const { modalVisible } = this.state;
    this.setState({dataRow: article});
    this.setState({ modalVisible: !modalVisible })
  };

  handleModalClose() {
    this.setState({ modalVisible: false})
    this.props.getPostsSaga();
  };

  submit() {
    const { createPostSaga, updatePostSaga } = this.props;
    const { dataRow } = this.state;
    if (dataRow.id && dataRow !== undefined) {
      updatePostSaga(dataRow)
      this.handleModalClose()
    } else {
      createPostSaga(dataRow)
      this.handleModalClose()
    }
  }
  render() {
    const { modalVisible } = this.state;
    const { data } = this.props.data;

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: '20px',
        sorter: (a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        },

      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: '60px',
        sorter: (a, b) => {
          if (a.email < b.email) return -1;
          if (a.email > b.email) return 1;
          return 0;
        },

      },
      {
        title: 'Nombre',
        dataIndex: 'first_name',
        key: 'first_name',
        width: '10px',
        sorter: (a, b) => {
          if (a.first_name < b.first_name) return -1;
          if (a.first_name > b.first_name) return 1;
          return 0;
        },

      },
      {
        title: 'Apellido',
        dataIndex: 'last_name',
        key: 'name',
        width: '10px',
        sorter: (a, b) => {
          if (a.last_name < b.last_name) return -1;
          if (a.last_name > b.last_name) return 1;
          return 0;
        },

      },
      {
        title: 'Acciones',
        key: 'action',
        width: '60px',
        className: 'noWrapCell',
        render: (text, row) => {
          return (
            <ActionWrapper>
              <a onClick={this.handleModal.bind(this, row)} href="# ">
                <i className="ion-android-create" />
              </a>

              <Popconfirms
                title="Estás seguro que quieres eliminar este elemento？"
                okText="Si"
                cancelText="No"
                placement="topRight"
                onConfirm={this.handleRecord.bind(this, 'delete', row)}
              >
                <a className="deleteBtn" href="# ">
                  <i className="ion-android-delete" />
                </a>
              </Popconfirms>
            </ActionWrapper>
          );
        },
      },
    ];
    if(data.data !== undefined){
      const dataSource = Object.values(data.data);
      const { dataRow } = this.state;
      if(modalVisible){
        return (
            <LayoutContentWrapper>
              <Box>
                <Form>
                  <Fieldset>
                    <Label>Email</Label>
                    <Input
                        placeholder="Email"
                        value={dataRow.email}
                        onChange={
                          event => this.setState({
                            dataRow: {
                              id: dataRow.id,
                              email: event.target.value,
                              first_name: dataRow.first_name,
                              last_name: dataRow.last_name
                            }
                          })
                        }
                    />
                  </Fieldset>

                  <Fieldset>
                    <Label>Nombre</Label>
                    <Input
                        placeholder="Nombre"
                        value={dataRow.first_name}
                        onChange={
                          event => this.setState({
                            dataRow: {
                              id: dataRow.id,
                              email: dataRow.email,
                              first_name: event.target.value,
                              last_name: dataRow.last_name
                            }
                          })
                        }
                    />
                  </Fieldset>
                  <Fieldset>
                    <Label>Apellido</Label>
                    <Input
                        placeholder="Apellido"
                        value={dataRow.last_name}
                        onChange={
                          event => this.setState({
                            dataRow: {
                              id: dataRow.id,
                              email: dataRow.email,
                              first_name: dataRow.first_name,
                              last_name: event.target.value
                            }
                          })
                        }
                    />
                  </Fieldset>
                  <ButtonHolders>
                    <ActionBtn type="primary" action="submit" onClick={this.submit.bind(this)}>Guardar</ActionBtn>
                    <Button type="secondary" onClick={this.handleModalClose.bind(this)}>Volver</Button>
                  </ButtonHolders>
                </Form>
              </Box>
            </LayoutContentWrapper>
        )
      } else {
        return (
            <LayoutContentWrapper>
              <Box>
                <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                  <TitleWrapper>
                    <ComponentTitle>Crud example</ComponentTitle>

                    <ButtonHolders>
                      <ActionBtn
                          type="primary"
                          onClick={this.handleModal.bind(this)}
                      >
                        Agregar nuevo registro
                      </ActionBtn>
                    </ButtonHolders>
                  </TitleWrapper>
                  <TableWrapper
                      rowKey={data.id}
                      pagination={false}
                      columns={columns}
                      dataSource={dataSource}
                      className="isoSimpleTable"
                  />
                </ContentHolder>
              </Box>
            </LayoutContentWrapper>
        );
      }

    } else return <h1>Cargando...</h1>
  }
}
const mapStateToProps = (state) => {
  const { Crud } = state;
  return {
    data: Crud,
    initialValues: state.Crud.specificData,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsSaga: () => dispatch(actions.loadFromApi()),
    createPostSaga: params => dispatch(actions.saveIntoApi(params)),
    updatePostSaga: data => dispatch(actions.updateFromApi(data)),
    deletePostSaga: id => dispatch(actions.deleteFromApi(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Crud)
