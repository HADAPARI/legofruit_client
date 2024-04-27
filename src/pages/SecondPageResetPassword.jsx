import { CheckCircle } from "@phosphor-icons/react";

function SecondPageResetPassword() {
  return (
    <div className="justify-center">
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="flex flex-row justify-center items-center lg:space-x-2 ">
            <CheckCircle size={60} className="relative text-green-500 " />
            <h1 className="font-bold text-4xl">Email vérifié !</h1>
          </div>

          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                Nous avons bien reçu votre demande de réinitialisation de mot de
                passe. Un lien de réinitialisation a été envoyé à l&apos;adresse
                e-mail associée à votre compte. Veuillez consulter votre boîte
                de réception (et éventuellement vos dossiers de courrier
                indésirable ou spam) pour trouver le lien de réinitialisation.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default SecondPageResetPassword;
