import React, { Component } from 'react'

export default class Contacto extends Component {
    render() {
        return (
            <div class="container">
        <div class="contactenos" >
            <br/><br/>
            <h1>Contáctanos</h1>    
            
            <ul id="social-media">
                <li><a href="https://twitter.com/?lang=es" ><img src="../images/ico-twitter@2x.png" alt=""/></a></li>
                <br/>
                <li><a href="https://www.facebook.com/" ><img src="../images/ico-facebook@2x.png" alt=""/></a></li>
                <br/>
                <li><a href="https://www.youtube.com/" ><img src="../images/ico-youtube@2x.png" alt=""/></a></li>
            </ul>
          </div>


        <div class="row">
           
            <div class="col align-self-start mx-auto mt-4">
      
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam numquam id dolorum dignissimos et. Ab voluptatibus necessitatibus rem minus rerum,
                    corrupti repudiandae aliquam aut soluta natus illo, architecto deserunt repellendus?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam magni porro quas placeat accusamus, veritatis id reprehenderit nesciunt nobis quidem dolor
                    cupiditate praesentium, facilis amet exercitationem repellendus maxime explicabo sequi quasi
                    eligendi? In odio corporis inventore nihil dicta ipsa libero pariatur suscipit, delectus recusandae
                    quasi hic facere atque earum ipsam iste obcaecati odit voluptatem eveniet consectetur magni sed
                    commodi quidem.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    In odit rem minus veniam reiciendis voluptatem iusto sapiente error porro quae aut delectus vitae,
                    natus placeat magni maiores, harum magnam et.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Earum est quasi unde, non quis blanditiis repellendus nihil esse explicabo corporis quod sed saepe
                    asperiores distinctio! Nostrum vel in nam, asperiores molestiae fugit! Quos accusamus officia
                    repellendus voluptatem totam ratione a quis repudiandae cum. Hic commodi fuga excepturi deserunt
                    velit, consequatur dignissimos iusto voluptates quisquam iure ducimus qui eaque sapiente minima!</p>
            </div>

            <div class="col align-self-start formulario" >
                <form >
                    <div class="form-group col-md-4">
                        
                        <select id="inputState" class="form-control">
                          <option selected>Selecciona el Servicio</option>
                          <option>Cumpleaños</option>
                          <option>Aniversario</option>   
                          <option>Fiestas infantiles</option>
                          <option>Declaración o Propuestas</option>
                          <option>Despedidas</option>
                          <option>Cena con Amigos</option>
                        </select>
                      </div>
                    <div class="form-group">
                        
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Asunto "/>
                    </div>

                    <div class="form-group">
                        
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Correo electronico "/>
                      </div>
                    <div class="form-group">
                      
                      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Nombre Completo"/>
                    </div>
                    <div class="form-group ">
                        
                        <input type="text" class="form-control mensaje" id="formGroupExampleInput2" placeholder="Mensaje "/>
                      </div>

                      <div class="form-group">
                        <button type="button" class="btn btn-warning" >Enviar</button>

                      </div>
                      
                  </form>
            </div>
        </div>
    </div>
          
        )
    }
}
