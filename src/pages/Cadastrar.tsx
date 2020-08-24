import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButtons,
    IonBackButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonFooter,
    IonButton,
    IonText

} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { ErrorMessage } from '@hookform/error-message';
import { AppContext } from '../services/State';
import { useHistory } from 'react-router-dom';

interface Props extends RouteComponentProps<{
    id: string;
}> { }

const Cadastrar: React.FC<Props> = ({ match }) => {
    const { dispatch } = React.useContext(AppContext);
    const { handleSubmit, control, errors, reset } = useForm();
    const history = useHistory();
    const onSubmit = (data: any) => {
        dispatch({
            type: "createProduct",
            product: data
        });
        reset();

        history.goBack();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} id="produto-form" >
            <IonPage>
                <IonHeader >
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/comprar"></IonBackButton>
                        </IonButtons>

                    </IonToolbar>
                </IonHeader>
                <IonContent>

                    <IonList>
                        <IonItem>
                            <IonLabel position="stacked">Código</IonLabel>

                            <Controller
                                render={({ onChange, onBlur, value, name }) =>
                                    (<IonInput disabled onIonChange={onChange} value={value} name={name} placeholder="Digite o código do produto" />)}
                                control={control}
                                name="codigo"
                                defaultValue={match.params.id}
                                rules={{
                                    required: "Campo obrigatório",

                                }}
                            />
                        </IonItem>
                        <ErrorMessage
                            errors={errors}
                            name="codigo"
                            as={<IonText color="danger" className="ion-padding-start" />}
                        />
                        <IonItem>
                            <IonLabel position="stacked">Produto</IonLabel>
                            <Controller
                                render={({ onChange, onBlur, value }) => (<IonInput onIonChange={onChange} placeholder="Digite o nome do produto" />)}
                                control={control}
                                name="nome"
                                defaultValue=""
                                rules={{
                                    required: "Campo obrigatório",

                                }}
                            />
                        </IonItem>
                        <ErrorMessage
                            errors={errors}
                            name="nome"
                            as={<IonText color="danger" className="ion-padding-start" />}
                        />
                        <IonItem>
                            <IonLabel position="stacked">Valor</IonLabel>
                            <Controller
                                render={({ onChange, onBlur, value }) =>
                                    (<IonInput
                                        type="number"
                                        pattern="([0-9]{1,3}\.)?[0-9]{1,3},[0-9]{2}$"
                                        min="0.00"
                                        step="0.01"
                                        onIonChange={onChange} placeholder="Digite o valor" />)}
                                control={control}
                                name="valor"
                                defaultValue=""

                                rules={{
                                    required: "Campo obrigatório",
                                    min: {
                                        value: 0,
                                        message: 'quantidade precisa ser maior que 1 '
                                    }

                                }}
                            />
                        </IonItem>
                        <ErrorMessage
                            errors={errors}
                            name="valor"
                            as={<IonText color="danger" className="ion-padding-start" />}
                        />
                        <IonItem>
                            <IonLabel position="stacked">Quantidade Estoque</IonLabel>
                            <Controller
                                render={({ onChange, onBlur, value }) => (<IonInput type="number" onIonChange={onChange} placeholder="Digite a quantidade em estoque" />)}
                                control={control}
                                name="estoque"
                                defaultValue=""

                                rules={{
                                    required: "Campo obrigatório",
                                    min: {
                                        value: 1,
                                        message: 'estoque precisa ser maior que 0 '
                                    }

                                }}
                            />
                        </IonItem>
                        <ErrorMessage
                            errors={errors}
                            name="estoque"
                            as={<IonText color="danger" className="ion-padding-start" />}
                        />

                    </IonList>


                </IonContent>
                <IonFooter>

                    <IonButton
                        size="large"
                        expand="full"
                        type="submit">
                        Cadastrar Produto
                </IonButton>

                </IonFooter>


            </IonPage>
        </form>

    )
}

export default Cadastrar;