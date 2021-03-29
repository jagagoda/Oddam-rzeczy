import '../../scss/home-page/_help.scss';
import Deco from "../../assets/decoration.svg";
import React, {useState} from 'react';

const HelpSection = () => {
    // const [currentFoundation, setCurrentFoundation] = useState(foundations[0]);
    // const [currentOrganization, setCurrentOrganization] = useState(organizations[0]);
    // const [currentCollection, setCurrentCollection] = useState(collections[0]);
    // const [active, setActive] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(3);

    const All = {
        foundations: [
            {
                name: 'Fundacja "Dbam o zdrowie"',
                goal: 'Cel i misja: Pomoc osobom znajdującym się w trudnej styuacji życiowej',
                products: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                name: 'Fundacja "Dla dzieci"',
                goal: 'Cel i misja: Pomoc dzieciom z ubogich rodzin',
                products: 'ubrania, meble, zabawki'
            },
            {
                name: 'Fundacja "Bez domu"',
                goal: 'Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania',
                products: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                name: 'Fundacja "Dbam o zdrowie"',
                goal: 'Cel i misja: Pomoc osobom znajdującym się w trudnej styuacji życiowej',
                products: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                name: 'Fundacja "Dla dzieci"',
                goal: 'Cel i misja: Pomoc dzieciom z ubogich rodzin',
                products: 'ubrania, meble, zabawki'
            },
            {
                name: 'Fundacja "Bez domu"',
                goal: 'Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania',
                products: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                name: 'Fundacja "Dbam o zdrowie"',
                goal: 'Cel i misja: Pomoc osobom znajdującym się w trudnej styuacji życiowej',
                products: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                name: 'Fundacja "Dla dzieci"',
                goal: 'Cel i misja: Pomoc dzieciom z ubogich rodzin',
                products: 'ubrania, meble, zabawki'
            },
            {
                name: 'Fundacja "Bez domu"',
                goal: 'Cel i misja: Pomoc dla osób nieposiadających miejsca zamieszkania',
                products: 'ubrania, jedzenie, ciepłe koce'
            },
        ],
        organizations: [
            {
                name: 'Organizacja “Lorem Ipsum 1”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },
            {
                name: 'Organizacja “Lorem Ipsum 2”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },
            {
                name: 'Organizacja “Lorem Ipsum 3”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },
            {
                name: 'Organizacja “Lorem Ipsum 4”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },
            {
                name: 'Organizacja “Lorem Ipsum 5”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },
            {
                name: 'Organizacja “Lorem Ipsum 6”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },
        ],
        collections: [
            {
            name: 'Zbiórka “Lorem Ipsum 1”',
            goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
            products: 'Egestas, sed, tempus'
        },
            {
                name: 'Zbiórka “Lorem Ipsum 2”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },
            {
                name: 'Zbiórka “Lorem Ipsum 3”',
                goal: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                products: 'Egestas, sed, tempus'
            },

        ]
    }

    return (
        <section className="help__section">
            <div className="help__header">
                <h1>Komu pomagamy?</h1>
                <img src={Deco} alt="dekoracja" className="img__deco"/>
            </div>
            <div className="help__columns">
                <button className="help__btn">Fundacjom</button>
                <button className="help__btn">Organizacjom<br/> pozarządowym</button>
                <button className="help__btn">Lokalnym<br/> zbiórkom</button>
            </div>
        </section>
    );
};

export default HelpSection;
