import { Link } from 'react-router-dom';
import "../styles/services.css"

const ServiceListItem = (serviceListItem) => {

    return (
        <div key={serviceListItem._id} className="table-item">
            <table className="table">
                <tbody>
                    <tr key={serviceListItem._id} >
                        <td>
                            <div className='d-flex'>         
                                <div className='part1'>
                                    <img className="sp_image" src={serviceListItem.image} alt="logoimg" />
                                </div>
                                <div className='part2'>
                                    <Link style={{ textDecoration: 'none' }} to={`/servicesDetails/${serviceListItem.sp_id}`} state={{ ser: serviceListItem.ser, user:serviceListItem.user }}>
                                        <h3>{serviceListItem.companyName}</h3>
                                    </Link>                        
                                    <h5>{serviceListItem.owner}</h5>
                                    <h5>{serviceListItem.phone}</h5>
                                    <h5>{serviceListItem.email}</h5>
                                </div>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
} 

export default ServiceListItem;