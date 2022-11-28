import React from 'react';
import { ImgCardGrande, LayoutCardGrande, TituloCardGrande, InfosCard } from './styles';


export function CardGrande(props) {
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={props.imagem} />
            <InfosCard>
                <TituloCardGrande>{props.nome}</TituloCardGrande>
                <p>{props.descricao}</p>
            </InfosCard>
        </LayoutCardGrande>
    )
}
