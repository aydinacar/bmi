import React from 'react'
import {IonRow, IonCol, IonCard, IonCardContent} from "@ionic/react";
const BmiResult: React.FC<{result: number}> = (props) => {

    return (
        <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h2 className="ion-text-center"> {props.result.toFixed(2)} </h2>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
    )
}

export default BmiResult