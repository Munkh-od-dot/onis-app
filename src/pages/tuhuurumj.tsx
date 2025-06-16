import React from 'react';
import { devices } from '../data/devices';
import DeviceCard from '../components/DeviceCard';
import "./tuhuurunj.css"

const Tuhuurumj: React.FC = () => {
    return (
        <div className="tuhuurumj">
            {devices.map((devices) => (
                <DeviceCard
                key = {devices.id}
                name = {devices.name}
                image = {devices.image}
                price = {devices.price}
                 />
            ))}
        </div>
    );
};

export default Tuhuurumj;