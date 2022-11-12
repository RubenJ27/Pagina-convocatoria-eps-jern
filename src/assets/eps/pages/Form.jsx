
import { useNavigate } from "react-router-dom"

export const Form = () => {

  const navigate = useNavigate();


  return (
    <>
       <section   className="home container-fluid" id="home">
        <div  className="swiper home-swiper">
        <div class="container" id="registration-form">
        <div class="image"></div>
        <div class="frm">
            <h1 className="text-black">Registrarse</h1>
            <form>
              <div class="container-register-form">
              <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="username">Servicios:</label>
                    <input type="text" class="form-control" id="username" placeholder="Servicios" />
                </div>
                <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="email">Fecha:</label>
                    <input type="email" class="form-control" id="email" placeholder="Fecha" />
                </div>
                <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="pwd">Ideps:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Ideps" />
                </div>
              </div>

              <div class="container-register-form">
              <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="username">Especificacion:</label>
                    <input type="text" class="form-control" id="username" placeholder="Especificacion" />
                </div>
                <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="email">Url:</label>
                    <input type="email" class="form-control" id="email" placeholder="Url" />
                </div>
                <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="pwd">Codigo:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Codigo" />
                </div>
              </div>

              <div class="container-register-form">
              <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="username">Especificacion:</label>
                    <input type="text" class="form-control" id="username" placeholder="Especificacion" />
                </div>
                <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="email">Url:</label>
                    <input type="email" class="form-control" id="email" placeholder="Url" />
                </div>
                <div class="form-group form-register">
                    <label className="label-register text-black text-start" for="pwd">Codigo:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Codigo" />
                </div>
              </div>

                
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg">Registrarse</button>
                </div>
            </form>
        </div>
    </div>
</div> 

      </section>
                                            
    </>
  )
}

