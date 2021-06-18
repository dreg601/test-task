import React from 'react';
import '../App.css'

const Lists = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p></p>;


    return (
        <ul>
            {repos.map(({ id, name, fname, mname, status, lastUpdatedAt, avatar, balance}) => {
                return (
                    <li key={id} className='info'>
                        <img src={avatar} style={{width: 50}}/>
                        <span >{name} </span>
                        <span >{fname} </span>
                        <span >{mname} </span>
                        <span >{lastUpdatedAt}</span>
                        <span >{balance} </span>
                        <span >{status} </span>
                    </li>
                );
            })}
        </ul>
    );
};
export default Lists;
