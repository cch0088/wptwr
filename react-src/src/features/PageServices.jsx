export default function PageServices() {}

export async function getContent(fromUrl) {
    try {
        const response = await fetch(fromUrl);
        const data = await response.json();
        return data;
    }
    catch {
        return {"message": "Access Error"};
    }
};
