import thor from "../../assets/logo-marvel-256.png";
import "./styles.css";

export function NotFound() {

    
    return (
        <section className="page_404">
            <div className="container" style={{height: 'auto'}}>
                <div className="row">	
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center bangers">404</h1>
                            </div>            
                            <div className="contant_box_404">
                                <h3 className="h2 bangers">Página não enontrada</h3>
                                <a href="/home" className="link_404">Voltar para a Homepage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
