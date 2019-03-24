import _Vue from 'vue';

const contact = {

	install (Vue: typeof _Vue, options?: any) {

		const { job } = options

		Vue.prototype.$simpleContact = (fname: string, lname: string, age: number) => info(fname, lname, age, job)

		Vue.prototype.$person = (fname: string, lname: string) => person(fname, lname)

		Vue.mixin({

			mounted() {

				console.log('Contact');

			}

		});

	}

}

const info = (fname = 'John', lname = 'Doe', age = 22, job = 'developer') => `My name is ${fname} ${lname} and I am a ${age} years old ${job}.`

const person = (fname = 'John', lname = 'Doe') => `My name is ${fname} ${lname}, nice to meet to.`

export default contact;
