import React from "react";
import { FaRecycle as Recycle } from "react-icons/fa";

function Chapter3() {
  return (
    <div className="Chapters">
      <Recycle
        style={{
          color: "rgb(11, 126, 25)",
          // uncomment the lines below to center icon
          // position: "relative",
          // left: "50%",
          width: "2em",
          height: "2em",
        }}
      />
      <h3 style={green}>Sostenibilidad y el espacio en casa</h3>
      <p>En el presente apartado te proponemos algunos ejemplos útiles a la hora de pensar los espacios que habitamos, para que sean lo más eficiente posible, tanto en el manejo de la energía como en el del agua y en los materiales que se utilizan. Analizamos cómo puede diseñarse nuestra vivienda para lograr confort y sostenibilidad.</p>
      <h3 style={green}>Los espacios que habitamos</h3>
      <p>La arquitectura denominada bioclimática consiste en el diseño de edificios teniendo en cuenta las condiciones climáticas y recursos disponibles para disminuir los impactos ambientales, reduciendo los consumos de energía.</p>
      <p>El diseño bioclimático no tiene por qué implicar un mayor costo en la obra, ni ser más lindo o feo que el diseño convencional. Sencillamente nos ayuda a tener en cuenta el clima y las condiciones del entorno, sin utilizar elementos mecánicos.</p>
      <p style={neonGreen}>"Por ejemplo: una casa bien aislada pierde la mitad de calor, y si está bien orientada y con aberturas de superficies convenientes, gana tres veces más energía que una casa convencional, con lo que sumados ambos conceptos, es posible gastar seis (6) veces menos energía."</p>
      <p>Los edificios construidos deben aprovechar las energías naturales del sol y del viento.</p>
      <p>En nuestra provincia hay tres zonas bioclimáticas: <strong>Templada Fría, Fría y Muy Fría</strong> (IV, V y VI respectivamente) y para poder responder a ellas la arquitectura de las construcciones puede adaptarse de diversas maneras, mejorando nuestra calidad de vida.</p>
      <ul>
        <li>Zona IV Templada Fría:</li>
        <p>En esta zona el verano tiene una importancia relativa, si la aislación está diseñada para responder en invierno, generalmente será suficiente.<br/>Sin embargo, el uso de colores claros, protecciones solares (pérgolas, persianas, parasoles) y control de las ventas expuestas al oeste permitirá reducir los problemas de sobrecalentamiento.<br/>También pueden utilizarse sistemas que reduzcan la amplitud térmica como los mencionados anteriormente y protegerse de los vientos predominantes incluso con barreras vegetales.</p>
        <li>Zona V Fría y Zona Fría VI Muy Fría:</li>
        <p>En esta zona son importantes las diferencias o amplitud térmica y los distintos gradientes de precipitación, así como los vientos predominantes del oeste.<br/>La conciencia del uso de energía en el espacio que habitamos debe modificar el enfoque de diseño del mismo. Si las energías convencionales son escasas, o de repente su valor aumenta, las edificaciones pueden contemplar esos cambios para poder mantener su funcionalidad a lo largo de su vida útil.</p>
      </ul>
      <p>Algunos consejos para utilizar más racionalmente los recursos energéticos en nuestras construcciones pueden ser:</p>
      <ul>
        <li>Utilizar <strong>fuentes renovables</strong> de energía solar.</li>
        <li>Elegir <strong>materiales</strong> que, en su elaboración o puesta en obra, no impliquen grandes consumos de energía.</li>
        <li>Que las <strong>formas y tipos constructivos</strong> de las edificaciones requieran menos energía para ser construidos y acondicionados.</li>
      </ul>
      <p>Por ejemplo, podemos pensar en diversos materiales y sus respuestas. El adobe tiene un mínimo contenido energético, aunque también requiere más mantenimiento. El ladrillo cerámico puede funcionar como mejor aislante, tiene mayor durabilidad y en paredes exteriores no necesita tanto espesor. También el ladrillo común puede ofrecer ventajas en relación a climas con mucha amplitud térmica, aunque su capacidad de aislación térmica es menor que la del ladrillo cerámico.</p>
      <h3 style={green}>EL NIVEL DE CONFORT EN UNA CASA</h3>
      <h4 style={green}>Recursos para mantenerlo y aumentar la sostenibilidad</h4>
      <ul>
        <li style={textGlow}><strong>CONDICIONES DE CONFORT EN INVIERNO:</strong></li>
        <p>Cuando la temperatura es inferior a 24° se debe favorecer la incidencia del sol, evitando el impacto del viento que pueda producir disconfort térmico.</p>
        <li style={textGlow}><strong>CONDICIONES CONFORTABLES EN VERANO:</strong></li>
        <p>Las protecciones solares y la ventilación selectiva permiten sostener el confort ante temperaturas elevadas.</p>
        <li style={textGlow}><strong>VENTILACIÓN CRUZADA:</strong></li>
        <p>Se llama así a las condiciones que permiten el flujo de aire en un espacio interior, desde el área de donde proviene el viento hacia su opuesta, donde se dirige el viento.</p>
        <li style={textGlow}><strong>INERCIA TÉRMICA o la capacidad de los materiales de acumular calor y liberarlo al ambiente:</strong></li>
        <p>Cuando hay una gran diferencia de temperatura entre el día y la noche, un recurso es construir nuestros muros con materiales que acumulen calor con la incidencia del sol y luego liberen ese calor por la noche. Ello mejora la temperatura interior. Puede utilizarse la piedra en este caso como una respuesta adecuada. Sin embargo, se debe contemplar sobre la disponibilidad e impacto de cada material según el área donde habitemos.</p>
        <p>Recordemos que acondicionar nuestra viviendo y lograr sostenibilidad tiene que ver también con el impacto que generemos en nuestro entorno.</p>
        <li style={textGlow}><strong>SISTEMAS SOLARES PASIVOS:</strong></li>
        <p>Aprovechar la radiación solar puede generar confort en nuestros espacios interiores cuando la temparatura oscila entre los 10°C y 20°C. Para ello, debe haber superficies vidriadas y aberturas orientadas al sol, buena aislación térmica y aberturas más pequeñas en oritentaciones menos favorables (como el Sur en nuestro hemisferio). Las aberturas de mayor dimensión pueden contar con protecciones (parasoles, pérgolas o persianas que nos protejan de la incidencia del sol en verano).</p>
        <p>Si las temperaturas son menores a 10°C no es suficiente con la incidencia del sol para generar confort por sí sola, y deberemos complementar con otros sistemas.</p>
        <li style={textGlow}><strong>VENTILACIÓN SELECTIVA:</strong></li>
        <p>Cuando hay grandes variaciones o amplitudes de temperatura puede aprovecharse esa misma variación a través de la ubicación y altura de las aberturas para generar un interior más confortable.</p>
        <p>Es decir, si tenemos ventanas en un nivel próximo al cielorraso sabemos que a esa altura el aire que saldrá hacia afuera será el calor, mientras que por aberturas en niveles cercanos al suelo ingresará aire frío. Esto no requiere que las aberturas sean grandes, ni ventanas en lados opuestos, sino que aprovecha la convección del aire para permitir regular la temperatura interior.</p>
        <li style={textGlow}><strong>MURO ACUMULADOR:</strong></li>
        <p>Se llama también <strong>Muro Trombe</strong>. Es un sistema solar pasivo que actúa eficazmente en condiciones de bajas temperaturas exteriores.</p>
        <p>Consiste en una pared de varias capas que modifica la temperatura promedio y la amplitud térmica.</p>
        <p>Desde el exterior, la radiación solar impacta sobre una superficie vidriada, que separada transmite calor a un muro que posee gran capacidad de acumular calor (como los de piedra que se ven a continuación). Así, este muro funciona acumulando calor durante el día, que transmite al interior durante la noche, cuando desciende la temperatura exterior, aumentando el confort en los espacios interiores de la vivienda.</p>
      </ul>
    </div>
  );
}

const green = {
  color: "rgb(11, 126, 25)"
};

const neonGreen = {
  boxSizing: "1px",
  border: "none",
  borderRadius: "20px",
  padding: "1em 0.5em 0.2em 1em",
  boxShadow: "0px 5px 26px 8px rgb(11, 126, 25)",
  margin: "2em 0 2em 0"
}

const textGlow = {
  textShadow: "0 0 10px rgb(11, 126, 25), 0 0 20px rgb(11, 126, 25), 0 0 30px rgb(11, 126, 25), 0 0 40px rgb(11, 126, 25), 0 0 50px rgb(11, 126, 25)",
  color: "inherit"
}

export default Chapter3;
