import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddVlontaire from './AddVlontaire'
import {
    deletevolontaire,
    getAllvolontaires,
    getVolontaire,
    editVolontaire,
} from '../../redux/Actions/VolontaireActions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Table, Button, Modal, Form } from 'antd'
export default function AllVolontaire() {
    const dispatch = useDispatch()

    const [form] = Form.useForm()
    const [volontaireupdate, setVolontaireupdate] = useState({})

    const [isModalVisible, setIsModalVisible] = useState(false)
    function handle(e) {
        const newdata = { ...volontaireupdate }
        newdata[e.target.id] = e.target.value
        setVolontaireupdate(newdata)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const GETvolontaire = (idVolontaire) => {
        dispatch(getVolontaire(idVolontaire))
        setIsModalVisible(true)
    }
    const Volontaire = useSelector(
        (state) => state.volontaireReducer.volontaire,
    )

    const delete_volontaire = (idVolontaire) => {
        Modal.confirm({
            title: 'Êtes-vous sûr de vouloir supprimer cet volontaire ? ',
            onOk: () => {
                toast.success('Le volontaire est supprimé avec succès', {})

                dispatch(deletevolontaire(idVolontaire))
            },
        })
    }

    const editvolontaire = (idVolontaire) => {
        const editedVolontaire = {
            nom_volontaire: volontaireupdate.nom_volontaire,
            prenom_volontaire: volontaireupdate.prenom_volontaire,
            cin_volontaire: volontaireupdate.cin_volontaire,
            age_volontaire: volontaireupdate.age_volontaire,
            tel_volontaire: volontaireupdate.tel_volontaire,
        }

        dispatch(editVolontaire(idVolontaire, editedVolontaire))
        handleCancel()
    }
    useEffect(() => {
        dispatch(getAllvolontaires())
    }, [])
    const Volontaires = useSelector(
        (state) => state.volontaireReducer.volontaires,
    )
    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            width: 120,
        },
        {
            title: 'Nom volontaire',
            dataIndex: 'nom_volontaire',
            width: 150,
        },
        {
            title: 'Prénom volontaire',
            dataIndex: 'pren_volontaire',
            width: 150,
        },
        {
            title: 'Carte identité nationale',
            dataIndex: 'cin',
            width: 160,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: 150,
        },
        {
            title: 'Numéro télèphone',
            dataIndex: 'tel',
            width: 150,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width: 200,
            render: (record) => {
                return (
                    <>
                        <Button
                            danger
                            onClick={() => delete_volontaire(record)}
                        >
                            Supprimer
                        </Button>
                        <Button onClick={() => GETvolontaire(record)}>
                            {' '}
                            Modifier
                        </Button>
                    </>
                )
            },
        },
    ]
    const datacenters =
        Volontaires &&
        Volontaires.map((volontaire, index) => ({
            key: index + 1,
            nom_volontaire: volontaire.nom_volontaire,
            pren_volontaire: volontaire.prenom_volontaire,
            cin: volontaire.cin_volontaire,
            age: volontaire.age_volontaire,
            tel: volontaire.tel_volontaire,
            actions: volontaire._id,
        }))

    return (
        <>
            <AddVlontaire />
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
                title='Modifier un volontaire'
                visible={isModalVisible}
                onOk={form.submit}
                onCancel={handleCancel}
            >
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={() =>
                        editvolontaire(Volontaire && Volontaire._id)
                    }
                >
                    <span> Nom</span>
                    <input
                        type='text'
                        id='nom_volontaire'
                        name='nom_volontaire'
                        defaultValue={Volontaire && Volontaire.nom_volontaire}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                    <br></br>
                    <span> Prénom</span>

                    <input
                        type='text'
                        id='prenom_volontaire'
                        name='prenom_volontaire'
                        defaultValue={
                            Volontaire && Volontaire.prenom_volontaire
                        }
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                    <br></br>
                    <span> Carte d'identité nationale</span>

                    <input
                        type='text'
                        id='cin_volontaire'
                        name='cin_volontaire'
                        defaultValue={Volontaire && Volontaire.cin_volontaire}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                    <br></br>
                    <span> Age</span>

                    <input
                        type='number'
                        id='age_volontaire'
                        name='age_volontaire'
                        defaultValue={Volontaire && Volontaire.age_volontaire}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                    <br></br>

                    <span> Numéro de télèphone</span>

                    <input
                        type='number'
                        id='tel_volontaire'
                        name='tel_volontaire'
                        defaultValue={Volontaire && Volontaire.tel_volontaire}
                        className='form-control'
                        onChange={(e) => handle(e)}
                    />
                </Form>
            </Modal>
        </>
    )
}
