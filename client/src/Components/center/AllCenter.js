import React, { useEffect, useState } from 'react'
import {
    getAllCenters,
    editCenter,
    deletecenter,
    getCenter,
} from '../../redux/Actions/CenterActions'
import { useDispatch, useSelector } from 'react-redux'
import AddCenter from './AddCenter'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Form, Table, Button, Modal } from 'antd'

export default function AllCenter() {
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const [centerupdate, setCenteupdate] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleCancel = () => {
        setIsModalVisible(false)
    }
    function handle(e) {
        const newdata = { ...centerupdate }
        newdata[e.target.id] = e.target.value
        setCenteupdate(newdata)
    }
    const GETcenter = (idCenter) => {
        dispatch(getCenter(idCenter))
        setIsModalVisible(true)
    }
    const Center = useSelector((state) => state.centerReducer.center)

    const delete_center = (idCenter) => {
        Modal.confirm({
            title: 'Êtes-vous sûr de vouloir supprimer cet center ? ',
            onOk: () => {
                toast.success('Le center est supprimé avec succès', {})
                dispatch(deletecenter(idCenter))
            },
        })
    }
    const editcenter = (idCenter) => {
        const editedCenter = {
            nom_center: centerupdate.nom_center,
            num_center: centerupdate.num_center,
            adresse: centerupdate.adresse,
            nombre_accueil: centerupdate.nombre_accueil,
        }

        dispatch(editCenter(idCenter, editedCenter))
        handleCancel()
    }

    useEffect(() => {
        dispatch(getAllCenters())
    })
    const Centers = useSelector((state) => state.centerReducer.centers)

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            width: 120,
        },
        {
            title: 'Nom center',
            dataIndex: 'nom_center',
            width: 150,
        },
        {
            title: 'Numéro center',
            dataIndex: 'num_center',
            width: 150,
        },
        {
            title: 'Addresse',
            dataIndex: 'adresse_center',
            width: 150,
        },
        {
            title: 'Nombre d`accueil',
            dataIndex: 'nb_accueil',
            width: 150,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 200,
            render: (record) => {
                return (
                    <>
                        <Button danger onClick={() => delete_center(record)}>
                            Supprimer
                        </Button>
                        <Button onClick={() => GETcenter(record)}>
                            {' '}
                            Modifier
                        </Button>
                    </>
                )
            },
        },
    ]
    const datacenters =
        Centers &&
        Centers.map((center, index) => ({
            key: index + 1,
            nom_center: center.nom_center,
            num_center: center.num_center,
            adresse_center: center.adresse,
            nb_accueil: center.nombre_accueil,
            actions: center._id,
        }))

    return (
        <>
            <AddCenter />
            <ToastContainer
                position='top-center'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
            />
            <br></br>

            <Table
                size='larg'
                scroll={{ y: 130 }}
                className='container'
                bordered
                columns={columns}
                dataSource={datacenters}
            />
            <Modal
                title='Modifier un center'
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={form.submit}
            >
                {' '}
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={() => editcenter(Center && Center._id)}
                >
                    <span> Nom</span>
                    <input
                        type='text'
                        id='nom_center'
                        name='nom_center'
                        defaultValue={Center && Center.nom_center}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                    <br></br>
                    <span> Numéro</span>

                    <input
                        type='text'
                        id='num_center'
                        name='num_center'
                        defaultValue={Center && Center.num_center}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                    <br></br>
                    <span> Adresse</span>

                    <input
                        type='text'
                        id='adresse'
                        name='adresse'
                        defaultValue={Center && Center.adresse}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                    <br></br>
                    <span> Nombre d'accueil</span>

                    <input
                        type='number'
                        id='nombre_accueil'
                        name='nombre_accueil'
                        defaultValue={Center && Center.nombre_accueil}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                </Form>
            </Modal>
        </>
    )
}
