import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addvolontaire } from '../../redux/Actions/VolontaireActions'
import { Form, Input, Button } from 'antd'

export default function AddVlontaire() {
    const [form] = Form.useForm()

    const [nom_volontaire, setNom_volontaire] = useState('')
    const [prenom_volontaire, setPrenom_volontaire] = useState('')
    const [cin_volontaire, setCin_volontaire] = useState('')
    const [age_volontaire, setAge_volontaire] = useState('')
    const [tel_volontaire, setTel_volontaire] = useState('')
    const dispatch = useDispatch()
    const AddNewVolontaire = () => {
        const newVolontair = {
            nom_volontaire,
            prenom_volontaire,
            cin_volontaire,
            age_volontaire,
            tel_volontaire,
        }
        dispatch(addvolontaire(newVolontair))
        setNom_volontaire('')
        setPrenom_volontaire('')
        setCin_volontaire('')
        setAge_volontaire('')
        setTel_volontaire('')
    }
    const onReset = () => {
        form.resetFields()
    }
    return (
        <>
            <div className='container center-form'>
                <div className='row justify-content-center'>
                    <div className='col-md-7'>
                        <div className='card'>
                            <div className='card-header'>
                                {' '}
                                <h4>Ajouter un volontaire</h4>
                            </div>
                            <div className='card-body'>
                                <Form form={form} layout='vertical'>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Nom du volontaire est obligatoire',
                                            },
                                        ]}
                                        name=' nom_volontaire'
                                        label='Nom'
                                    >
                                        <Input
                                            value={nom_volontaire}
                                            type='text'
                                            onChange={(e) =>
                                                setNom_volontaire(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Prénom du volontaire est obligatoire',
                                            },
                                        ]}
                                        name=' prenom_volontaire'
                                        label='Prénom '
                                    >
                                        <Input
                                            value={prenom_volontaire}
                                            type='text'
                                            onChange={(e) =>
                                                setPrenom_volontaire(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Care identité nationale est obligatoire',
                                            },
                                        ]}
                                        name=' cin_volontaire'
                                        label='Carte identité nationale'
                                    >
                                        <Input
                                            value={cin_volontaire}
                                            type='number'
                                            onChange={(e) =>
                                                setCin_volontaire(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Age du volontaire est obligatoire',
                                            },
                                        ]}
                                        name=' age_volontaire'
                                        label='Age '
                                    >
                                        <Input
                                            value={age_volontaire}
                                            type='number'
                                            onChange={(e) =>
                                                setAge_volontaire(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Numéro télèphone est obligatoire',
                                            },
                                        ]}
                                        name=' tel_volontaire'
                                        label='Numéro télèphone'
                                    >
                                        <Input
                                            value={tel_volontaire}
                                            type='number'
                                            onChange={(e) =>
                                                setTel_volontaire(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type='primary'
                                            htmlType='submit'
                                            onClick={AddNewVolontaire}
                                        >
                                            Confirmer
                                        </Button>
                                        <Button
                                            htmlType='button'
                                            onClick={onReset}
                                        >
                                            Annuler
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>{' '}
            </div>
        </>
    )
}
