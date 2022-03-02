import { withEditableResource } from "./withEditableResource";

export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser}) => {
    const { name, age, hairColor } = user || {};

    return user ? (
        <>
            <p>Name:</p>
            <input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
            <p>Age:</p>
            <input type = "number" value={age} onChange={e => onChangeUser({ age: Number(e.target.value) })} />
            <p>HairColor:</p>
            <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save</button>
        </>
    ) : <p>Loading</p>;
}, '/users/123', 'user');