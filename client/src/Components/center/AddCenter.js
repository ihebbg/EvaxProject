import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addcenter } from '../../redux/Actions/CenterActions'
import { Form, Input, Button } from 'antd'

import './AddCenter.css'
export default function Addcenter() {
    const [form] = Form.useForm()
    const [nom_center, setNom] = useState('')
    const [num_center, setNum] = useState('')
    const [adresse, setAdresse] = useState('')
    const [nombre_accueil, setNbr_accueil] = useState('')
    const dispatch = useDispatch()

    const AddNewCenter = () => {
        const newCenter = {
            nom_center,
            num_center,
            adresse,
            nombre_accueil,
        }

        dispatch(addcenter(newCenter))
        setNom('')
        setNum('')
        setAdresse('')
        setNbr_accueil('')
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
                                <h4>Ajouter un center</h4>
                            </div>
                            <div className='card-body'>
                                <Form form={form} layout='vertical'>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Nom du center est obligatoire',
                                            },
                                        ]}
                                        name=' nom_center'
                                        label='Nom'
                                    >
                                        <Input
                                            value={nom_center}
                                            type='text'
                                            name='nom_center'
                                            onChange={(e) =>
                                                setNom(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Numéro du center est obligatoire',
                                            },
                                        ]}
                                        name=' num_center'
                                        label='Numéro'
                                    >
                                        <Input
                                            value={num_center}
                                            type='text'
                                            name='num_center'
                                            onChange={(e) =>
                                                setNum(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    ' Adresse du center est obligatoire',
                                            },
                                        ]}
                                        name=' adresse'
                                        label='Adresse'
                                    >
                                        <Input
                                            value={adresse}
                                            type='text'
                                            name='adresse'
                                            onChange={(e) =>
                                                setAdresse(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message: `Nombre d'accueil est obligatoire`,
                                            },
                                        ]}
                                        name=' nombre_accueil'
                                        label='Nombre d`accueil'
                                    >
                                        <Input
                                            value={nombre_accueil}
                                            type='number'
                                            name='nombre_accueil'
                                            onChange={(e) =>
                                                setNbr_accueil(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type='primary'
                                            htmlType='submit'
                                            onClick={AddNewCenter}
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
                </div>
                {}
            </div>
        </>
    )
}
