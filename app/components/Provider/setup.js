import storage from '../../libs/storage';
import persist from '../../libs/persist';
import DaTabStore from '../../stores/DaTabStore';

export default alt => {
	alt.addStore('DaTabStore', DaTabStore);

	persist(alt, storage(localStorage), 'app');
}
