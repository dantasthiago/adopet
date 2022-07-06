import casa from "../../assets/casa.png";
import mensagens from "../../assets/mensagens.png";

const Header = () => {
	return (
		<div>
			casa
			<img src={casa} alt='casa.png' />
			mensagens
			<img src={mensagens} alt='mensagens.png' />
		</div>
	);
};
export default Header;
