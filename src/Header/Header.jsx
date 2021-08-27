import Navbar from "./Navbar/Navbar";
import Languages from "./Languages/Languages";
import s from'./Header.module.css'

const Header = () => {
    return (
      <div className={s.header}>
        <Languages />
        <Navbar />
      </div>
    )
}

export default Header
