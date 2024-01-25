"use client"
import { Icon } from '@iconify/react';

export const navItems = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'services',
        link: '/services'
    },
    {
        name: 'about',
        link: '/about'
    },
    {
        name: 'contact',
        link: '/contact'
    },
    {
        name: 'products',
        link: '/products'
    },
    {
        name: 'team',
        link: '/team'
    },
]

export const carouselItems = [
    {
        title: 'ORGANIC & NATURAL',
        descriptions: '',
        image: ''
    },
    {
        title: 'LIVESTOCK NATURAL',
        descriptions: '',
        image: ''
    },
    {
        title: 'SAVE OUR SOILS',
        descriptions: '',
        image: ''
    },
]


export const mission = [
    {
        icon: <Icon icon="teenyicons:bulb-on-solid" color='black' width={30} height={30} />,
        title: 'INNOVATION',
        message: "We're committed to developing novel, sustainable agriculture & waste solutions that benefit both our communities."
    },
    {
        icon: <Icon icon="mingcute:target-line" color='black' width={30} height={30} />,
        title: 'EFFECIENCY',
        message: "We're committed to developing novel, sustainable agriculture & waste solutions that benefit both our communities."
    },
    {
        icon: <Icon icon="icon-park-solid:communication" color='black' width={30} height={30} />,
        title: 'EFFECTIVE COMMUNICATION',
        message: "We're committed to developing novel, sustainable agriculture & waste solutions that benefit both our communities."
    },
]

export const coreServices = [
    {
        image: <Icon icon="emojione-monotone:wastebasket" color='#82B440' width={50} height={50} />,
        title: 'Composting',
        message: 'We turn organic waste to compost, which reduce green house gassses emited daily  from our land fills',
    },
    {
        image: <Icon icon="game-icons:fly" color='#82B440' width={50} height={50} />,
        title: 'Black soldier fly',
        message: 'We do researches on black soldier fly production on a way to reduce waste problem and increase protein availability',
    },
    {
        image: <Icon icon="iconoir:design-nib-solid" color='#82B440' width={50} height={50} />,
        title: 'Design & Management',
        message: 'W e  provide a design solution to waste problems on different indusries or sites  and manage waste.',
    },
    {
        image: <Icon icon="iconoir:brain-research" color='#82B440' width={50} height={50} />,
        title: 'Research',
        message: 'We do research on green technologies daily to improve the waste management sector',
    },
]