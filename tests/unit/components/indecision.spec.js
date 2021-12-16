import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

describe('Indecision Component', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    } );


    test('Escribir en el input no debe de dispara nada', () => {
        
    });

    test('Escribir el simbolo "?" debe de disparar el fetch', () => {
        
    });

    test('Pruebas en getAnswer', () => {
        
    });

    test('Pruebas en getAnswer - Fallo en el API', () => {
        
    });

});