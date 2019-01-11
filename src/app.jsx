import { root, useState, reconcile } from 'solid-js';
import { r } from 'solid-js/dom';

const App = () => {
  const [ state, setState ] = useState({ databases: [] }),
    load = () => {
      Monitoring.renderRate.ping();
      setState(reconcile(['databases', ENV.generateData().toArray()], { mode: 'merge', key: null }));
      setTimeout(load, ENV.timeout);
    };
  setTimeout(load, 0);

  return <table class="table table-striped latest-data"><tbody>
    <$ each={ state.databases }>{ db =>
      <tr>
        <td class="dbname" textContent={ db.dbname } />
        <td class="query-count">
          <span class={( db.lastSample.countClassName )} textContent={( db.lastSample.nbQueries )} />
        </td>
        <$ each={ db.lastSample.topFiveQueries }>{query =>
          <td class={( query.elapsedClassName )}>
            {( query.formatElapsed )}
            <div class="popover left">
                <div class="popover-content" textContent={( query.query )} />
                <div class="arrow"></div>
            </div>
          </td>
        }</$>
      </tr>
    }</$>
  </tbody></table>
}

root(() => document.getElementById('dbmon').appendChild(<App />))