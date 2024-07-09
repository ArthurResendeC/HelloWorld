import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function App() {
  const [isGuestsInputsOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState(['telodosfoguetes@rocketseat.com'])



  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(ev:FormEvent<HTMLFormElement>){
    ev.preventDefault()

    const data = new FormData(ev.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])


    ev.currentTarget.reset()  
  }

  function removeEmail(emailToRemove:string){
    const newEmailList = emailsToInvite.filter(invited => invited !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }

  return (
    <section className="h-screen flex justify-center items-center bg-pattern bg-norepeat bg-center ">
      <article className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div className='flex flex-col items-center justify-center '>
          <img src="/logo.svg" alt="Plann.er logo" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>

          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400' />
              <input disabled={isGuestsInputsOpen} type="text" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" placeholder="para onde você vai?" />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400' />
              <input disabled={isGuestsInputsOpen} type="text" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" placeholder="quando?" />
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>

            {isGuestsInputsOpen ? (
              <button
                className='bg-zinc-800 text-zinc-200 rounded-lg py-2 px-6 font-medium flex items-center gap-2 hover:bg-zinc-700'
                onClick={closeGuestsInput}
              >
                Alterar local/data
                <Settings2 className='size-5' />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className='bg-lime-500 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-600'
              >
                Continuar <ArrowRight className='size-5' />
              </button>
            )}

          </div>

          {isGuestsInputsOpen && (
            <div>
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

                <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                  <UserRoundPlus className='size-5 text-zinc-400' />
                  <span className='text-lg text-zinc-400 text-1 flex-1 text-left'>Quem estará na viagem?</span>
                </button>

                <div className='w-px h-6 bg-zinc-800'></div>

                <button
                  className='bg-lime-500 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-600'
                >
                  Confirmar viagem <ArrowRight className='size-5' />
                </button>

              </div>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />com os nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.</p>
      </article>

      {isGuestsModalOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl shadow-shape bg-zinc-900  py-4 px-6 space-y-5'>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Selecionar convidados</h2>
                <button onClick={closeGuestsModal}><X className='size-5 text-400' /></button>
              </div>
              <p className='text-sm text-zinc-400'>
                Os convidados irão receber e-mails para confirmar se participarão da viagem.
              </p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {emailsToInvite.map(email => {
                return (
                  <div className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                    <span className='text-zinc-300'>{email}</span>
                    <button onClick={()=> removeEmail(email)} type='button'><X className='size-4' /></button>
                  </div>
                )
              })}
            </div>
            <div className='w-full h-px bg-zinc-800'></div>
            <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border rounded-lg border-zinc-800 flex items-center gap-2'>
              <AtSign className='size-5 text-zinc-400' />
              <input
                type="email"
                name='email'
                className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
                placeholder='Digite o email do convidado'
              />

              <button
                type='submit'
                className='bg-lime-500 text-lime-950 rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-lime-600'
              >
                Convidar <Plus className='size-5' />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default App