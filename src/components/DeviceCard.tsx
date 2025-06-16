import "./DevicesCard.css";

type Props = {
    name: string;
    price: string;
    image: string;
};

const DevieCard: React.FC<Props> = ({ name, price, image }) => {
    return(
        <div className="DeviceCard">
            <h3>{name}</h3>
            <img src={image} alt="{name}" className="img" />
            <p>Үнэ: {price}</p>
        </div>
    )
}

export default DevieCard;