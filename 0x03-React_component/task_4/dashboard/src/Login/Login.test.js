import { shallow, mount, unmount } from '../../config/setupTests';
import WithLoggingHOC from '../HOC/WithLogging';
import Login from './Login';


// shallow render login component
describe('<Login />', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	
	it('Tests that Login renders without crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Tests that the component renders 2 <input> and 2 <label> tags', () => {
		const Example = WithLoggingHOC(() => <Login />);
		const wrapper = mount(<Example />);
		expect(wrapper.find('input').length).toBe(2);
		expect(wrapper.find('label').length).toBe(2);
		wrapper.unmount();
	})
});
