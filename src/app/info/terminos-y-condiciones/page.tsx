import { TypographyContainer } from '@/components/typography/TypographyContainer'
import { TypographyH1 } from '@/components/typography/TypographyH1'
import { TypographyH2 } from '@/components/typography/TypographyH2'
import { TypographyList } from '@/components/typography/TypographyList'
import { TypographyP } from '@/components/typography/TypographyP'

export default function Page () {
  return (
    <TypographyContainer>
      <TypographyH1>Términos y Condiciones</TypographyH1>
      <br />

      <TypographyH2>1. Introducción</TypographyH2>
      <TypographyP>
        Bienvenido a [Nombre de la Aplicación]. Al registrarte y utilizar esta
        aplicación, aceptas cumplir con los siguientes Términos y Condiciones.
        Si no estás de acuerdo con alguno de estos términos, no debes usar la
        aplicación.
      </TypographyP>
      <br />

      <TypographyH2>2. Uso Aceptable</TypographyH2>
      <TypographyP>
        La aplicación [Nombre de la Aplicación] se ofrece para ayudarte a
        prepararte para obtener el permiso de armas mediante la realización de
        tests y cuestionarios. No debes utilizar esta aplicación para ninguna
        actividad que viole las leyes locales, estatales o nacionales. El uso
        indebido de esta aplicación, incluidos intentos de acceso no autorizado
        o ataques de seguridad, está estrictamente prohibido.
      </TypographyP>
      <br />

      <TypographyH2>3. Registro de Cuenta</TypographyH2>
      <TypographyP>
        Al registrarte, nos proporcionas información veraz, precisa y
        actualizada. Te comprometes a no utilizar información falsa ni suplantar
        la identidad de terceros. Tu cuenta es personal e intransferible. Eres
        responsable de mantener la confidencialidad de tu contraseña y de todas
        las actividades que ocurran bajo tu cuenta.
      </TypographyP>
      <br />

      <TypographyH2>4. Recolección y Uso de Información Personal</TypographyH2>
      <TypographyP>
        Al utilizar [Nombre de la Aplicación], recopilamos los siguientes datos
        personales:
      </TypographyP>
      <TypographyList>
        <li>Nombre</li>
        <li>Apellidos</li>
        <li>Correo electrónico</li>
      </TypographyList>
      <TypographyP>
        Las contraseñas que nos proporcionas se almacenan de forma encriptada y
        segura. No almacenamos contraseñas en texto plano.
      </TypographyP>
      <TypographyP>
        Tu información se utilizará únicamente para gestionar tu cuenta y para
        proporcionarte acceso a la aplicación. No compartimos tu información con
        terceros, salvo que sea necesario para cumplir con obligaciones legales
        o con tu consentimiento explícito.
      </TypographyP>
      <br />

      <TypographyH2>5. Política de Privacidad</TypographyH2>
      <TypographyP>
        [Nombre de la Aplicación] se compromete a proteger tu privacidad. Puedes
        consultar nuestra
        <a href="enlace_a_la_politica_de_privacidad">
          Política de Privacidad
        </a>{' '}
        para más detalles sobre cómo manejamos tu información personal.
      </TypographyP>
      <br />

      <TypographyH2>6. Uso de Cookies</TypographyH2>
      <TypographyP>
        Utilizamos cookies y tecnologías similares para mejorar tu experiencia
        de usuario, autenticar sesiones y analizar el uso de la aplicación. Al
        utilizar [Nombre de la Aplicación], aceptas el uso de cookies. Puedes
        consultar nuestra
        <a href="enlace_a_la_politica_de_cookies">Política de Cookies</a> para
        más detalles.
      </TypographyP>
      <br />

      <TypographyH2>7. Modificaciones a los Términos</TypographyH2>
      <TypographyP>
        Nos reservamos el derecho de modificar estos Términos y Condiciones en
        cualquier momento. Si realizamos cambios significativos, te
        notificaremos a través de la aplicación o por correo electrónico. Al
        continuar utilizando la aplicación después de que los cambios entren en
        vigor, aceptas los nuevos términos.
      </TypographyP>
      <br />

      <TypographyH2>8. Responsabilidad</TypographyH2>
      <TypographyP>
        [Nombre de la Aplicación] no se hace responsable por cualquier daño o
        perjuicio resultante del uso incorrecto de la aplicación o por fallos en
        el sistema. El uso de la aplicación es bajo tu propio riesgo.
      </TypographyP>
      <br />

      <TypographyH2>9. Ley Aplicable</TypographyH2>
      <TypographyP>
        Estos Términos y Condiciones se rigen por las leyes de [tu país o
        región]. Cualquier disputa relacionada con estos términos se resolverá
        ante los tribunales competentes de [tu país o región].
      </TypographyP>
      <br />

      <TypographyH2>10. Contacto</TypographyH2>
      <TypographyP>
        Si tienes alguna pregunta sobre estos Términos y Condiciones, puedes
        ponerte en contacto con nosotros en [email de contacto].
      </TypographyP>

      <TypographyP>
        <strong>Fecha de última actualización:</strong> [Fecha]
      </TypographyP>
    </TypographyContainer>
  )
}
