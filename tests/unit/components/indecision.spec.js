import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

describe('Indecision Component', () => {
    
    let wrapper
    let clgSpy

    global.fetch = jest.fn()

    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
        
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    } );


    test('Escribir en el input no debe de dispara nada (console.log)', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola desde las pruebas')

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalledTimes(0);


        
    });

    test('Escribir el simbolo "?" debe de disparar el getAnswer', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola desde las pruebas?')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
        
    });

    test('Pruebas en getAnswer', () => {
        
    });

    test('Pruebas en getAnswer - Fallo en el API', () => {
        
    });

});