import { Dispatch, useMemo } from "react";
import { ActivityActions, ActivityState } from "../reducers/activityReducer";


type HeaderProps = {
  state: ActivityState,
  dispatch: Dispatch<ActivityActions>
};

const Header = ({state, dispatch} : HeaderProps) => {

  const canRestart = useMemo(() => state.activities.length > 0, [state.activities]);
  return (
    <div className="bg-lime-600 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-center text-lg font-bold text-white uppercase">
          Contador de calorias
        </h1>
        <button
          className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white 
        cursor-pointer rounded-lg text-sm disabled:opacity-10"
        disabled= {!canRestart}
        onClick={() => dispatch({type: 'restart-app'})}>
          Reiniciar App
        </button>

      </div>
    </div>
  )
}

export default Header

