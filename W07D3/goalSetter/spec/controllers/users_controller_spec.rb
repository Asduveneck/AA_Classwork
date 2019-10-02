require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe 'GET #new' do
    it 'renders the new users template' do
      get :new
      expect(response).to render_template(:new)
    end
  end

  subject(:user) do
    User.create!(
    username: "Tobias",
    password: "password")
  end

  describe 'POST #create' do
    let (:user_params) do
      { user: {
          email: 'toby@aa.com',
          username: 'Tobias',
          password: 'password'
        }
      }
    end

    context 'with valid params' do
      it 'logs in the user' do
        post :create, params: user_params 

        user = User.find_by(username: 'Tobias')
        expect(session[:session_token]).to eq(user.session_token)
      end

      it 'redirects to the user\'s show page' do 
        post :create, params: user_params
        user = User.find_by(username: 'Tobias')
        expect(response).to redirect_to(user_url(user))
      end
    end

    context 'with invalid params' do 
      it 'validates the presence of password and renders the new template with errors' do 
        post :create, params: { user: { username: 'Tobias', email: 'Toby.gmail', password: '123456'} }
        expect(response).to render_template(:new)
        expect(flash[:errors]).to be_present
      end
    end
  end
end
