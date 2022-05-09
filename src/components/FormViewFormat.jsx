import React, { useReducer} from "react"
import FormElementComponent from './forms/FormElementComponent'
import orderBy from 'lodash/fp/orderBy'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import form from '../template/prueba'
import formRenderReducer from '../reducers/formRender'
import {ACTIONS} from '../constants/constants';

function ListElements(props){

  const { valueMap, setValue } = props;
  const { formElements } = props.formato;

  return flow(orderBy('displayOrder','asc'), map((element) => {
    return (
      <FormElementComponent key={element.elementId}
                            formElements={formElements}
                            element={element}
                            setValue={setValue}
                            valueMap={valueMap}
      />)
  }))(formElements)
}


function init() {
  return {valueMap: {}};
}

export default function FormViewFormat(props){

  const [state, dispatch] = useReducer(formRenderReducer, init());
  const setValue = (id, value) => dispatch({type: ACTIONS.ON_CHANGE_RENDER, id, value})

  return(
    <div className="container">
      <form>
        <div><pre>{JSON.stringify(state.valueMap, null, 2) }</pre></div>
        <ListElements formato={props.formato} valueMap={state.valueMap} setValue={setValue} />
        <div className="form-group" style={{paddingTop:'2em'}}>
          <div className="text-center">
            <button type="button" className="btn btn-success" onClick={()=> console.log('valueMap', state.valueMap)}>Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
