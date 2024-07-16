import React from 'react'
import { Dialog } from '@mui/material';
import { useState } from 'react';
import Button from '../../../components/UIElements/Button/Button';

const New_RFQ = ({setDetails, openPopup, setOpenPopup, name, image, desc, qty, unit, min, max, price, loc, date}) => {

    const [checked, setchecked] = useState(false);
    const [delivery, setDelivery] = useState(true);
    const [newDetail, setnewDetail] = useState({});
    const [isMonthly, setIsMonthly] = useState(false);

    const handleClose = () =>
    {
        setOpenPopup(false);
    }

    const handleRange = (e) =>
    {
        setchecked(e.target.checked);
    }

    const handleDelivery = (e) =>
    {
        setDelivery(e.target.value);
    }

    const handleMonthly = (e) =>
    {
        setIsMonthly((prev) => !prev);
    }

    const handleChange = (e) =>
    {
        const property = e.target.id;
        console.log(e.target.value);
        setnewDetail((prev) => ({
            ...prev, [property] : e.target.value
        }))
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setDetails((prev) => ([...prev, newDetail]));
        handleClose();
        setnewDetail({});
    }


    return (
        <Dialog
            maxWidth
            open = {openPopup}
            className='mx-auto p-4 '
            onClose={handleClose}
        >
           <form onSubmit={handleSubmit} onChange={handleChange} type = "submit" className='m-8 flex flex-col space-y-4'>
                <label className='font-semibold'> Product Name</label>
                <input value={name} id='name' className=' bg-[#d8f9ff]  rounded-sm p-2'/>
                <label className='font-semibold'>Select product image:</label>
                <input value = {image} id='image' type="file" /> 
                <label className='font-semibold '> Price per unit</label>
                <input value={price} id='price' type='number' className=' bg-[#d8f9ff]  rounded-sm p-2' />
                <div className='space-y-2'>  
                    <div className='flex space-x-2'>
                        <input onChange={handleRange} type='checkbox'/>
                        <label>Price is Negotiable</label>  
                    </div>   
                    <div className='flex space-x-2'>
                        <input onChange={handleDelivery} type='checkbox'/>
                        <label>Delivery Charges included</label>  
                    </div>                 
                </div>
                {delivery ?
                <input value={qty} id='price' type='number' className=' bg-[#d8f9ff]  rounded-sm p-2' />
                : null}
                {checked ?
                <div className='flex justify-between text-sm space-x-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold'>Minimum</label>
                        <input value={min} id='min' type='number' className=' bg-[#d8f9ff]  rounded-sm p-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold'>Maximum</label>
                        <input value={max} id='max' type='number' className=' bg-[#d8f9ff]  rounded-sm p-2' />
                    </div>
                </div>
                : null}
                <label className='font-semibold '> Delivery Frequency</label>
                <select id = 'freq' onChange={handleMonthly} className='flex space-x-4 bg-[#d8f9ff] p-2 '>
                    <option value = "Once" className='space-x-2'>                        
                        Once
                    </option>
                    <option value= "Monthly" className='space-x-2 p-2 '>              
                        Monthly
                    </option>
                </select>
                <div className = {`${isMonthly ? "inline space-x-4" : "hidden"} `}>
                    <label className='font-semibold '>Duration(in months)</label>
                    <input id='duration' type='number' className=' bg-[#d8f9ff]  rounded-sm p-2' />
                </div>
                <label className='font-semibold '> Unit</label>
                <input value={unit} id='unit' type='text' className=' bg-[#d8f9ff]  rounded-sm p-2' />
                <label className='font-semibold'> Price</label>
                <input value={price} id='price' type='number' className=' bg-[#d8f9ff]  rounded-sm p-2' />                
                <label className='font-semibold'>Location</label>
                <input value = {loc} id='location' className=' bg-[#d8f9ff]  rounded-sm p-2'/>
                <label className='font-semibold'> Delivery Due date </label>
                <input value={date} id='date' type = 'date' className=' bg-[#d8f9ff]  rounded-sm p-2'/>
                <label className='font-semibold'> Quality Remarks </label>
                <input  id='remarks' type = 'text' className=' bg-[#d8f9ff]  rounded-sm p-2'/>
                <label className='font-semibold'>Terms of payment</label>
                <select id='paymentTerms' className='space-y-4  bg-[#d8f9ff] p-2'>
                    <option className = 'border-2  space-x-2 rounded-lg p-2'>
                        <input type='radio' />
                        <span >100% before dispatch of materials against proforma invoice</span>
                    </option>
                    <option>
                        <input type='radio' />
                        <span >50% before dispatch against proforma invoice and balance 50% at time of dispatch against invoice & E-way bill</span>
                    </option>
                    <option>
                        <input type='radio' />
                        <span >50% before dispatch of materials against proforma invoice and balance 50% on delivery of the material</span>
                    </option>
                    <option className = 'border-2 space-x-2 rounded-lg p-2'>
                        <input type='radio' />
                        <span >100% on delivery of the material</span>
                    </option>
                </select>
                <Button>
                    Submit
                </Button>
           </form>
        </Dialog>
    )
}


export default New_RFQ
