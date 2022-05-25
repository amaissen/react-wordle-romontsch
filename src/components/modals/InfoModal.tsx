import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Instrucziuns" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Emprova da lignar il plaid en 6 gadas. Suenter mintga emprova midan las
        colurs e muossan con datier che ti eis dil plaid encuretg.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="R" />
        <Cell value="U" />
        <Cell value="T" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Il bustab T ei part dil plaid ed egl endretg liug.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="present"
        />
        <Cell value="A" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Il bustab N ei part dil plaid, mo buca egl endretg liug.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="I" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="M" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Il bustab R ei buca part dil plaid.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
              Mess a disposizun dall'Uniun da giuventetgna Sagogn.
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Plaidin ei la versiun romontscha dil giug {' '}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          className="underline font-bold"
        >
          Wordle
        </a>
        . Il code anfleis Vus sin {' '}
        <a
          href="https://github.com/amaissen/react-wordle-romontsch"
          className="underline font-bold"
        >
          Github
        </a>
        .
      </p>
    </BaseModal>
  )
}
