import React from 'react';
import { IonButton, IonText, IonAlert } from '@ionic/react';
import './FinalizarFooter.css';
import { AppContext } from '../services/State';

const FinalizarFooter = () => {
    const [showAlert, setShowAlert] = React.useState(false);
    const { state, dispatch } = React.useContext(AppContext);
    const total = () => {
        return state.chart.reduce((acumulador, produto, indice, original) => {
            return acumulador += produto.quantidade * produto.valor;
        }, 0);
    }

    const finalizarCompra = () => {
        state.chart.map(item => {
            dispatch({
                type: "updateProduct",
                code: item.codigo,
                quantity: item.quantidade
            });
            return item;
        });
        dispatch({
            type: "clearChart",
        });

    };



    return (
        <div className="footer">
            <IonText color="dark">

                <div className="total">
                    <h2>Total:</h2>
                    <h1>{total().toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}</h1>
                </div>

            </IonText>
            <IonButton
                onClick={() => setShowAlert(true)}
                expand="full" size="large">Finalizar Compra</IonButton>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={'Confirmação!'}
                message={'Finalizar <strong>Compra</strong>?'}
                buttons={[
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            setShowAlert(false);
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            finalizarCompra()
                        }
                    }
                ]}
            />
        </div>
    )
};

export default FinalizarFooter;

