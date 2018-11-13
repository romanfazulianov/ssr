const users = {};

export default {
    getValue(uuid) {
        return !uuid ? {...users} : users[uuid];
    },
    setValue(uuid, value) {
        users[uuid] = value;
        return value;
    }
}