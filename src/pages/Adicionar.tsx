import React, { useContext } from 'react';
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

const Adicionar: React.FC<Props> = ({ match }) => {
    const { state, dispatch } = useContext(AppContext);
    const { handleSubmit, control, errors, reset } = useForm();

    const findProduct = (codigo, products) => products.find((product, index, arr) => product.codigo === codigo);

    const inicial = findProduct(match.params.id, state.products);
    const [produto] = React.useState(inicial);

    const history = useHistory();
    const onSubmit = (data: any) => {
        dispatch({
            type: "insertChart",
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
                                defaultValue={produto.codigo}
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
                                render={({ onChange, onBlur, value }) => (<IonInput value={value} disabled onIonChange={onChange} placeholder="Digite o nome do produto" />)}
                                control={control}
                                name="produto"
                                defaultValue={produto.nome}
                                rules={{
                                    required: "Campo obrigatório",

                                }}
                            />
                        </IonItem>
                        <ErrorMessage
                            errors={errors}
                            name="produto"
                            as={<IonText color="danger" className="ion-padding-start" />}
                        />
                        <IonItem>
                            <IonLabel position="stacked">Valor</IonLabel>
                            <Controller
                                render={({ onChange, onBlur, value }) =>
                                    (<IonInput
                                        value={value}
                                        type="number"
                                        disabled
                                        pattern="([0-9]{1,3}\.)?[0-9]{1,3},[0-9]{2}$"
                                        min="0.00"
                                        step="0.01"
                                        onIonChange={onChange} placeholder="Digite o valor" />)}
                                control={control}
                                name="valor"
                                defaultValue={produto.valor}

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
                            <IonLabel position="stacked">Quantidade</IonLabel>
                            <Controller
                                render={({ onChange, onBlur, value }) => (<IonInput value={value} type="number" onIonChange={onChange} placeholder="Digite a quantidade em estoque" />)}
                                control={control}
                                name="quantidade"
                                defaultValue=""

                                rules={{
                                    required: "Campo obrigatório",
                                    min: {
                                        value: 1,
                                        message: 'quantidade precisa ser maior que 0 '
                                    },
                                    max: {
                                        value: produto.estoque,
                                        message: `quantidade precisa ser menor que ${produto.estoque}`
                                    }

                                }}
                            />
                        </IonItem>
                        <ErrorMessage
                            errors={errors}
                            name="quantidade"
                            as={<IonText color="danger" className="ion-padding-start" />}
                        />

                    </IonList>


                </IonContent>
                <IonFooter>

                    <IonButton
                        size="large"
                        expand="full"
                        type="submit">
                        Adicionar ao Carrinho
                </IonButton>

                </IonFooter>


            </IonPage>
        </form>

    )
}

export default Adicionar;