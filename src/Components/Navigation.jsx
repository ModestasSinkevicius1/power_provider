import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <div className="container navigation">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <span className="navbar-brand">Energy</span>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink to='home' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                                    <NavLink to='supliers' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Supliers</NavLink>
                                    <NavLink to='consumers' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Consumers</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navigation;