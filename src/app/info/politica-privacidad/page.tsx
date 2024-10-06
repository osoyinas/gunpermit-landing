import { TypographyContainer } from '@/components/typography/TypographyContainer'
import { TypographyH1 } from '@/components/typography/TypographyH1'
import { TypographyH2 } from '@/components/typography/TypographyH2'
import { TypographyList } from '@/components/typography/TypographyList'
import { TypographyP } from '@/components/typography/TypographyP'

export default function Page () {
  return (
    <TypographyContainer>
      <TypographyH1>Política de Privacidad</TypographyH1>
      <br />

      <TypographyH2>1. Introducción</TypographyH2>
      <TypographyP>
        En [Nombre de la Aplicación], nos comprometemos a proteger tu privacidad
        y garantizar la seguridad de tus datos personales. Esta Política de
        Privacidad explica cómo recopilamos, utilizamos y protegemos tu
        información personal cuando utilizas nuestra aplicación. Al registrarte
        y utilizar [Nombre de la Aplicación], aceptas esta política de
        privacidad.
      </TypographyP>
      <br />

      <TypographyH2>2. Información que Recopilamos</TypographyH2>
      <TypographyP>
        Al utilizar [Nombre de la Aplicación], recopilamos y procesamos los
        siguientes datos personales:
      </TypographyP>
      <TypographyList>
        <li>Nombre</li>
        <li>Apellidos</li>
        <li>Correo electrónico</li>
        <li>Contraseña (almacenada de forma encriptada)</li>
      </TypographyList>
      <br />

      <TypographyH2>3. Uso de tu Información Personal</TypographyH2>
      <TypographyP>
        La información que recopilamos se utiliza exclusivamente para los
        siguientes fines:
      </TypographyP>
      <TypographyList>
        <li>Crear y gestionar tu cuenta en la aplicación.</li>
        <li>Autenticación y acceso a las funcionalidades de la aplicación.</li>
        <li>Mejorar tu experiencia de usuario.</li>
      </TypographyList>
      <TypographyP>
        No utilizamos tu dirección de correo electrónico para enviar correos
        electrónicos no solicitados o de marketing.
      </TypographyP>
      <br />

      <TypographyH2>4. Base Legal para el Tratamiento de Datos</TypographyH2>
      <TypographyP>
        De acuerdo con el GDPR, la base legal para procesar tus datos personales
        es la <strong>ejecución de un contrato</strong>
        (Art. 6(1)(b) del GDPR), ya que necesitamos esta información para
        proporcionarte acceso a los servicios de nuestra aplicación.
      </TypographyP>
      <TypographyP>
        En el caso de que sea necesario procesar tus datos por otras razones
        (por ejemplo, cumplimiento de obligaciones legales), se te informará y
        se solicitará tu consentimiento si corresponde.
      </TypographyP>
      <br />

      <TypographyH2>5. Conservación de Datos</TypographyH2>
      <TypographyP>
        Conservamos tus datos personales solo durante el tiempo que sea
        necesario para cumplir con los fines descritos en esta Política de
        Privacidad o para cumplir con requisitos legales. Si decides eliminar tu
        cuenta, tu información personal será eliminada de nuestros sistemas de
        acuerdo con nuestras políticas de retención de datos, salvo que exista
        una obligación legal para mantenerla.
      </TypographyP>
      <br />

      <TypographyH2>6. Seguridad de los Datos</TypographyH2>
      <TypographyP>
        Implementamos medidas técnicas y organizativas adecuadas para garantizar
        la seguridad de tu información personal. Las contraseñas se almacenan de
        forma encriptada mediante algoritmos de cifrado estándar de la industria
        y no son accesibles en texto plano.
      </TypographyP>
      <TypographyP>
        Sin embargo, debes tener en cuenta que ninguna transmisión de datos por
        internet o método de almacenamiento electrónico es 100% seguro. Nos
        esforzamos por proteger tus datos, pero no podemos garantizar su
        seguridad absoluta.
      </TypographyP>
      <br />

      <TypographyH2>7. Derechos de los Usuarios (GDPR)</TypographyH2>
      <TypographyP>
        De acuerdo con el GDPR, tienes los siguientes derechos sobre tus datos
        personales:
      </TypographyP>
      <TypographyList>
        <li>
          <strong>Derecho de acceso</strong>: Puedes solicitar una copia de los
          datos personales que almacenamos sobre ti.
        </li>
        <li>
          <strong>Derecho de rectificación</strong>: Puedes solicitar la
          corrección de cualquier dato incorrecto o incompleto.
        </li>
        <li>
          <strong>Derecho de supresión</strong>: Puedes solicitar que eliminemos
          tus datos personales cuando ya no sean necesarios para los fines para
          los que fueron recopilados.
        </li>
        <li>
          <strong>Derecho a la limitación del tratamiento</strong>: Puedes
          solicitar que limitemos el uso de tus datos en ciertas circunstancias.
        </li>
        <li>
          <strong>Derecho a la portabilidad de los datos</strong>: Puedes
          solicitar recibir tus datos personales en un formato estructurado y de
          uso común, o que los transfiramos a otro responsable del tratamiento,
          cuando sea técnicamente posible.
        </li>
        <li>
          <strong>Derecho a oponerte</strong>: Puedes oponerte al tratamiento de
          tus datos personales bajo ciertas circunstancias.
        </li>
      </TypographyList>
      <TypographyP>
        Para ejercer cualquiera de estos derechos, puedes ponerte en contacto
        con nosotros en osoyinas@gmail.com.
      </TypographyP>
      <br />

      <TypographyH2>8. Transferencia Internacional de Datos</TypographyH2>
      <TypographyP>
        No transferimos tus datos personales fuera del Espacio Económico Europeo
        (EEE). Si en el futuro necesitamos transferir tus datos a un país fuera
        del EEE, garantizaremos que tus datos estén protegidos de acuerdo con
        las normativas aplicables, incluyendo el uso de cláusulas contractuales
        estándar aprobadas por la Comisión Europea.
      </TypographyP>
      <br />

      <TypographyH2>9. Uso de Cookies</TypographyH2>
      <TypographyP>
        Nuestra aplicación utiliza cookies para autenticar sesiones de usuario y
        mejorar la funcionalidad del servicio. No utilizamos cookies con fines
        de publicidad o marketing. Puedes obtener más detalles sobre cómo usamos
        las cookies en nuestra{' '}
        <a href="enlace_a_la_politica_de_cookies">Política de Cookies</a>.
      </TypographyP>
      <br />

      <TypographyH2>10. Cambios en la Política de Privacidad</TypographyH2>
      <TypographyP>
        Nos reservamos el derecho de modificar esta Política de Privacidad en
        cualquier momento. Si realizamos cambios importantes, te lo
        notificaremos a través de la aplicación o por otros medios adecuados. Te
        recomendamos revisar esta política periódicamente para estar informado
        sobre cómo protegemos tu información personal.
      </TypographyP>
      <br />

      <TypographyH2>11. Contacto</TypographyH2>
      <TypographyP>
        Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el
        tratamiento de tus datos personales, puedes ponerte en contacto con
        nosotros en [email de contacto].
      </TypographyP>

      <TypographyP>
        <strong>Fecha de última actualización:</strong> 06/10/2024
      </TypographyP>
    </TypographyContainer>
  )
}
