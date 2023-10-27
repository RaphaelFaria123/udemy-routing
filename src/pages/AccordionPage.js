import Accordion from '../components/Accordion';

function AccordionPage() {

    const items = [{
        id: '3223',
        label: 'Item 1',
        content: 'content 1 content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1content 1'
    }, {
        id: '3224',
        label: 'Item 2',
        content: 'content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2content 2'
    }, {
        id: '3225',
        label: 'Item 3',
        content: 'content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3content 3'
    }]

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default AccordionPage;
