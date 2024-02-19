export const validateEmail = (email) => {
    // eslint-disable-next-line
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export const validatePassword = (password1, password2) => {
    return password1 === password2;
}

export const getRoot = (wp_root_const) => {
    if (wp_root_const !== '/') {
        return (`/${wp_root_const}/`);
    } else {
        return wp_root_const;
    }
}
