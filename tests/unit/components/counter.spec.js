import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test('debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot();
    // });

    test('El h2 del titulo existe', () => {

        
        expect(wrapper.find('h2').exists()).toBe(true);
        
    });

    test('h2 debe de tener el valor por defecto', () => {

        const h2Value = wrapper.find('h2').text();


        expect(h2Value).toBe('Contador')
        
    });

    test('El valor por defecto debe de ser 10 en el p', () => {



        const value = wrapper.find('[data-test-id="counter"]').text()


        expect(value).toBe('10')
        
    });

    test('Debe de incrementar y decrementar el contador', async() => {
        
        const [increseBtn,decreaseBtn] = wrapper.findAll('button')

        await increseBtn.trigger('click');
        await increseBtn.trigger('click');
        await increseBtn.trigger('click');


    
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(value).toBe('11')

    });

    test('Debe de establecer el valor por defecto', () => {
        
        const start = wrapper.props('start')

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(Number(value)).toBe(start)
        
    });

    test('Debe de mostrar la prop title', () => {
        
    });


});