"use client"
import { Fragment, useState, useEffect } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Durward Reynolds', subArr: ["bhola", "chola", "am"] },
  { id: 2, name: 'Kenton Towne', subArr: ["bhola1", "chola1", "am1"] },
  { id: 3, name: 'Therese Wunsch', subArr: ["bhola2", "chola2", "am2"] },
  { id: 4, name: 'Benedict Kessler', subArr: ["bhola3", "chola3", "am3"] },
  { id: 5, name: 'Katelyn Rohan', subArr: ["bhola4", "chola4", "am4"] },
]


function MyListbox() {

  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [selectedGroup , setSelectedGroup] = useState(selectedPerson.subArr)
  const [selectedGroupMem , setSelectedGroupMem] = useState(selectedPerson.subArr[0])


  useEffect(() => {
    function1(selectedPerson);
    function2(selectedPerson);
    // ... any other functions you want to call
    setSelectedGroup(selectedPerson.subArr)
    setSelectedGroupMem(selectedPerson.subArr[0])
  
  }, [selectedPerson]);  // The useEffect will trigger whenever selectedItem changes
  



  return (
    <div>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>

        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      <Listbox value={selectedGroupMem} onChange={setSelectedGroupMem}>

        <Listbox.Button>{selectedGroupMem}</Listbox.Button>
        <Listbox.Options>
          {selectedGroup.map((khabar,idx) => (
            <Listbox.Option key={idx} value={khabar}>
              {khabar}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>

  )
}

export default MyListbox;


function LogWhatever(etaEseche) {
  console.log(etaEseche.name)
}


  
const function1 = (selectedItem) => {
  console.log('Function 1 called with:', selectedItem.name);
};

const function2 = (selectedItem) => {
  console.log('Function 2 called with:', selectedItem.id);
};



