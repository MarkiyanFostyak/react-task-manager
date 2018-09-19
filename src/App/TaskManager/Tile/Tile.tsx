import * as React from 'react';
import styles from './Tile.module.scss';

interface ITileProps{
    children: any
}

export const Tile = (props: ITileProps) => {
    return (
        <div className = {styles.Tile}>
            {props.children}
        </div>
    )
} 

