
import { useNavigate } from "react-router-dom"

export const Form = () => {

  const navigate = useNavigate();


  return (
    <>
       <section     className="home container-fluid" id="home">
        <div     className="swiper home-swiper">
         
            
          <h4>llegue aqui form</h4>
        </div>
        
    <a href="#"  className="scrollup" id="scroll-up">
      <i  className="bx bx-up-arrow-alt scrollup__icon"></i>
    </a>
      </section>
    </>
  )
}

