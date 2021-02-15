import {useState, useEffect} from 'react';
import axios from 'axios';
import Typerwriter from '../../typewriter/Typewriter.js';

const adapools = "https://js.adapools.org/pools/76619d4c31c0570824e369d13a95542b65ee29546f2527f96042e602/summary.json"
const Pool = () => {
    const [messages, setMessages] = useState([]);
    const getData = () => {
        axios.get(adapools)
        .then((resp) => {
            setMessages(extractPoolInfo(resp.data));
        })
        .catch((err) => {
            console.log(err)
        });
    }

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    const extractPoolInfo = (data) => {
        const name = "Pool Name: " + data.data.db_name  + "\n";
        const created = "Created: " + data.created + "\n";
        const updated = "Updated: " + data.updated + "\n";
        const roaLifeTime = "ROA Lifetime: " + data.data.roa_lifetime + "%\n";
        const roa = "ROA Month: " + data.data.roa + "%\n";
        const delegators = "Delegators: " + data.data.delegators + "\n";
        const activeStake = "Active Stake: " + formatter.format(data.data.active_stake / 1000000) + "\n";
        const blockEstimate = "Block Estimate: " + data.data.blocks_estimated + "\n";
        const blockEpoch = "Blocks in Epoch: " + data.data.blocks_epoch + "\n";
        const blockLifetime = "Blocks Lifetime: " + data.data.blocks_lifetime;

        return [name, created, updated, roaLifeTime, roa, delegators, activeStake, blockEstimate, blockEpoch, blockLifetime];
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="content-backdrop content-blur">
            <Typerwriter messages={messages} heading={'Pool'} ></Typerwriter>
        </div>
    );
}

export default Pool;
