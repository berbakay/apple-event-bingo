import React from 'react';



class BingoTable extends React.Component {
    state = {
        tiles: [[{name: 'Tim Cook', isChecked: false},{name:'Jiggle Mode', isChecked:false},
        {name:'iPhone mini', isChecked:false},{name:'No Charger with New Phone', isChecked:false},
        {name:'HomePod', isChecked:false}],[{name:'We Think You\'ll Love Them', isChecked:false},
        {name:'Eddy Cue', isChecked:false},{name:'iPhone 12 Pro Max', isChecked:false},
        {name:'Airtags', isChecked:false},{name:'Best iPhone yet', isChecked:false}],
        [{name:'Augmented Reality Demo', isChecked:false},{name:'Wireless Charging Mat', isChecked:false},
        {name:'Free Square', isChecked:false},{name:'Best Camera in a Smart Phone', isChecked:false},
        {name:'Smaller Notch', isChecked:false}],[{name:'Silicon Macs', isChecked:false},
        {name:'AirPods', isChecked:false},{name:'Touch ID in Unlock Button', isChecked:false},
        {name:'Craig Federighi', isChecked:false},{name:'120hz', isChecked:false}],
        [{name:'5G', isChecked:false},{name:'New Funky Colour', isChecked:false},
        {name:'No Headphones with New Phone', isChecked:false},{name:'LiDar', isChecked:false},
        {name:'Lisa Jackson', isChecked:false}]]
      }

    toggleChecked = (event) => {
        const tileID = event.target.id;
        this.setState((previousState) => {
            const currentState = [...previousState.tiles];
            const newState = currentState.map(row => {
                const newRow = [...row].map(tile => {
                    const copyTile = {...tile}
                    if(tileID === copyTile.name) {
                        copyTile.isChecked = !tile.isChecked
                        console.log(copyTile)
                        return copyTile
                    } else {
                        return copyTile;
                    }
                })
            return newRow;
            })
            return {
                tiles: newState
            }
        })
    }


    render() {
        return (<table>
            <tbody>
            {this.state.tiles.map(row => {
                return (<tr key={row[0].name}>
                    {row.map(tile => {
                       return (<td key={tile.name} className={tile.name, tile.isChecked.toString()} id={tile.name} onClick={this.toggleChecked}>
                            <p id={tile.name}>{tile.name}</p>
                        </td>)
                    })}
                </tr>)
        })}
        </tbody>
        </table>)
    }
}

export default BingoTable