import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <div className="container navigation">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                            <span class="navbar-brand">Energy</span>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
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