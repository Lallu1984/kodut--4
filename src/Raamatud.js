import Loendur from "./Loendur"


function content({content}) {

    return (
        <div className="raamat">
            {
                content.map((raamat, index) => {
                    return (
                        <div className="rida" key={index}>
                            <div className="col-8">Pealkiri: {raamat.pealkiri}</div>
                            <div className="col-8">Autor: {raamat.autor}</div>
                            <div className="col-8">
                                <Loendur />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default content