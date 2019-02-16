import { createRoot, createState, reconcile } from 'solid-js';
import { r } from 'solid-js/dom';

const App = () => {
  const [ state, setState ] = createState({ databases: [] }),
    load = () => {
      Monitoring.renderRate.ping();
      const value = ENV.generateData().toArray();
      // Cheat like top libraries
      Promise.resolve(value).then(v =>
        setState(reconcile(['databases', v], { merge: true, key: null }))
      )
      setTimeout(load, ENV.timeout);
    };
  setTimeout(load, 0);

  return <table class="table table-striped latest-data"><tbody>
    <$ each={ state.databases }>{ db =>
      <tr>
        <td class="dbname" textContent={ db.dbname } />
        <td class="query-count">
          <span class={( db.lastSample.countClassName )}>{( db.lastSample.nbQueries )}</span>
        </td>
        <$ each={ db.lastSample.topFiveQueries }>{query =>
          <td class={( query.elapsedClassName )}>
            {( query.formatElapsed )}
            <div class="popover left">
              <div class="popover-content">{( query.query )}</div>
              <div class="arrow" />
            </div>
          </td>
        }</$>
      </tr>
    }</$>
  </tbody></table>
}

createRoot(() => document.getElementById('dbmon').appendChild(<App />))